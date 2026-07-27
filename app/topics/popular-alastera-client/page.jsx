import PopularAlasteraClientKeywordPage, { generateMetadata } from './popular-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraClientKeywordPage />;
}
