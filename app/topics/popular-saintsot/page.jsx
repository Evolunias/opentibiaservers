import PopularSaintsotKeywordPage, { generateMetadata } from './popular-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotKeywordPage />;
}
