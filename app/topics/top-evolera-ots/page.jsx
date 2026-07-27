import TopEvoleraOtsKeywordPage, { generateMetadata } from './top-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraOtsKeywordPage />;
}
