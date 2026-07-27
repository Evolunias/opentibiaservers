import EvoleraGermanyServerKeywordPage, { generateMetadata } from './evolera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraGermanyServerKeywordPage />;
}
