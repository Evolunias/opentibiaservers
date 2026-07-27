import ActiveDuraOnlinePrivateServerKeywordPage, { generateMetadata } from './active-dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlinePrivateServerKeywordPage />;
}
