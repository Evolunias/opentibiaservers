import NtoStarCanadaServersKeywordPage, { generateMetadata } from './nto-star-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCanadaServersKeywordPage />;
}
