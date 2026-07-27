import CustomKasteriaLoginKeywordPage, { generateMetadata } from './custom-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaLoginKeywordPage />;
}
