import CustomMapCyntaraServersKeywordPage, { generateMetadata } from './custom-map-cyntara-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCyntaraServersKeywordPage />;
}
