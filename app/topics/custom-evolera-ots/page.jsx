import CustomEvoleraOtsKeywordPage, { generateMetadata } from './custom-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraOtsKeywordPage />;
}
