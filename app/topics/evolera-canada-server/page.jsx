import EvoleraCanadaServerKeywordPage, { generateMetadata } from './evolera-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCanadaServerKeywordPage />;
}
