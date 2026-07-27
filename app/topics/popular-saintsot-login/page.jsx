import PopularSaintsotLoginKeywordPage, { generateMetadata } from './popular-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotLoginKeywordPage />;
}
