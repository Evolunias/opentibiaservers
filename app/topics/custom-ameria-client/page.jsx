import CustomAmeriaClientKeywordPage, { generateMetadata } from './custom-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaClientKeywordPage />;
}
