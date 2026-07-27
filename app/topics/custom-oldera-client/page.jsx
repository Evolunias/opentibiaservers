import CustomOlderaClientKeywordPage, { generateMetadata } from './custom-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaClientKeywordPage />;
}
