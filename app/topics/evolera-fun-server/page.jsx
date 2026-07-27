import EvoleraFunServerKeywordPage, { generateMetadata } from './evolera-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraFunServerKeywordPage />;
}
