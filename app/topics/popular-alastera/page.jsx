import PopularAlasteraKeywordPage, { generateMetadata } from './popular-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraKeywordPage />;
}
