import EvoleraArgentinaServersKeywordPage, { generateMetadata } from './evolera-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraArgentinaServersKeywordPage />;
}
