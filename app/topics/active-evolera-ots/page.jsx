import ActiveEvoleraOtsKeywordPage, { generateMetadata } from './active-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraOtsKeywordPage />;
}
