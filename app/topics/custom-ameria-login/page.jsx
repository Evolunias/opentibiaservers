import CustomAmeriaLoginKeywordPage, { generateMetadata } from './custom-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaLoginKeywordPage />;
}
