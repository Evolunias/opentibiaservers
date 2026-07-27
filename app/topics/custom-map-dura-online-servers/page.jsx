import CustomMapDuraOnlineServersKeywordPage, { generateMetadata } from './custom-map-dura-online-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDuraOnlineServersKeywordPage />;
}
