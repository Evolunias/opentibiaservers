import PopularRealestaKeywordPage, { generateMetadata } from './popular-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaKeywordPage />;
}
