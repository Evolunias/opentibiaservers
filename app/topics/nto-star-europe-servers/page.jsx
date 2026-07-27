import NtoStarEuropeServersKeywordPage, { generateMetadata } from './nto-star-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEuropeServersKeywordPage />;
}
