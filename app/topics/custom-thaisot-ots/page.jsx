import CustomThaisotOtsKeywordPage, { generateMetadata } from './custom-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotOtsKeywordPage />;
}
