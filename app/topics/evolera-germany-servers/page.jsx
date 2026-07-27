import EvoleraGermanyServersKeywordPage, { generateMetadata } from './evolera-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraGermanyServersKeywordPage />;
}
