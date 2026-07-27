import CustomDuraOnlinePrivateServerKeywordPage, { generateMetadata } from './custom-dura-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlinePrivateServerKeywordPage />;
}
