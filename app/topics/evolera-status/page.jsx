import EvoleraStatusKeywordPage, { generateMetadata } from './evolera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraStatusKeywordPage />;
}
