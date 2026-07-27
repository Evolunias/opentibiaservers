import CustomSaintsotOtsKeywordPage, { generateMetadata } from './custom-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotOtsKeywordPage />;
}
