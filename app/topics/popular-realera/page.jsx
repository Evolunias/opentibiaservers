import PopularRealeraKeywordPage, { generateMetadata } from './popular-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraKeywordPage />;
}
