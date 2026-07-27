import CustomAmeriaOtKeywordPage, { generateMetadata } from './custom-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOtKeywordPage />;
}
