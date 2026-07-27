import EvoleraArgentinaServerKeywordPage, { generateMetadata } from './evolera-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraArgentinaServerKeywordPage />;
}
