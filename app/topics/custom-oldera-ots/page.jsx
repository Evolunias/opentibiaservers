import CustomOlderaOtsKeywordPage, { generateMetadata } from './custom-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaOtsKeywordPage />;
}
