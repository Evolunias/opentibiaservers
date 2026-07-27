import PopularRealeraClientKeywordPage, { generateMetadata } from './popular-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraClientKeywordPage />;
}
