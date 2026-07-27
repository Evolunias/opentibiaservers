import NtoStarCanadaServerKeywordPage, { generateMetadata } from './nto-star-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCanadaServerKeywordPage />;
}
