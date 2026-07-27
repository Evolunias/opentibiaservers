import EvoleraHighExpKeywordPage, { generateMetadata } from './evolera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraHighExpKeywordPage />;
}
