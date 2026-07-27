import NoResetDuraOnlinePrivateServerKeywordPage, { generateMetadata } from './no-reset-dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlinePrivateServerKeywordPage />;
}
