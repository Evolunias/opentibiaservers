import TibiaraCanadaServerKeywordPage, { generateMetadata } from './tibiara-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCanadaServerKeywordPage />;
}
