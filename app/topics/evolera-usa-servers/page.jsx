import EvoleraUsaServersKeywordPage, { generateMetadata } from './evolera-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraUsaServersKeywordPage />;
}
