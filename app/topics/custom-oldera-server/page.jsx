import CustomOlderaServerKeywordPage, { generateMetadata } from './custom-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaServerKeywordPage />;
}
