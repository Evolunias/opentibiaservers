import PopularRealestaClientKeywordPage, { generateMetadata } from './popular-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaClientKeywordPage />;
}
