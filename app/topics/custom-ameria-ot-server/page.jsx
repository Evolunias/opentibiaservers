import CustomAmeriaOtServerKeywordPage, { generateMetadata } from './custom-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOtServerKeywordPage />;
}
