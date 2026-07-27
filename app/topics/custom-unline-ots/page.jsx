import CustomUnlineOtsKeywordPage, { generateMetadata } from './custom-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineOtsKeywordPage />;
}
