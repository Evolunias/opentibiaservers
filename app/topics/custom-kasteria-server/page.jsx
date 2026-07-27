import CustomKasteriaServerKeywordPage, { generateMetadata } from './custom-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaServerKeywordPage />;
}
