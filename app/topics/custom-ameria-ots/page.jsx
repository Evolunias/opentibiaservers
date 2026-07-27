import CustomAmeriaOtsKeywordPage, { generateMetadata } from './custom-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOtsKeywordPage />;
}
