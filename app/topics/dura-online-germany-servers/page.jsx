import DuraOnlineGermanyServersKeywordPage, { generateMetadata } from './dura-online-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineGermanyServersKeywordPage />;
}
