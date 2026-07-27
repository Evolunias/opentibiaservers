import EvoleraPolandServersKeywordPage, { generateMetadata } from './evolera-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPolandServersKeywordPage />;
}
