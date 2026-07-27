import CustomMapOlderaServerKeywordPage, { generateMetadata } from './custom-map-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOlderaServerKeywordPage />;
}
