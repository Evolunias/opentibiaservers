import CustomMapZezeniaOnlineServerKeywordPage, { generateMetadata } from './custom-map-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapZezeniaOnlineServerKeywordPage />;
}
