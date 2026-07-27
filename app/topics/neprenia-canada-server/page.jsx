import NepreniaCanadaServerKeywordPage, { generateMetadata } from './neprenia-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCanadaServerKeywordPage />;
}
