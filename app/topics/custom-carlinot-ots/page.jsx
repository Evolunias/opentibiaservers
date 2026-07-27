import CustomCarlinotOtsKeywordPage, { generateMetadata } from './custom-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotOtsKeywordPage />;
}
