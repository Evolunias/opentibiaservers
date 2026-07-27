import CustomMapCyntaraServerKeywordPage, { generateMetadata } from './custom-map-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCyntaraServerKeywordPage />;
}
