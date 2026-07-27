import TibijkaCanadaServerKeywordPage, { generateMetadata } from './tibijka-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCanadaServerKeywordPage />;
}
