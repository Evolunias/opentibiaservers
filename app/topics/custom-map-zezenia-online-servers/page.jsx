import CustomMapZezeniaOnlineServersKeywordPage, { generateMetadata } from './custom-map-zezenia-online-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapZezeniaOnlineServersKeywordPage />;
}
