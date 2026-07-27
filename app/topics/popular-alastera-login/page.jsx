import PopularAlasteraLoginKeywordPage, { generateMetadata } from './popular-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraLoginKeywordPage />;
}
