import TibianusCanadaServerKeywordPage, { generateMetadata } from './tibianus-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCanadaServerKeywordPage />;
}
