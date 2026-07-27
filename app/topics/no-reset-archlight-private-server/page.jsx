import NoResetArchlightPrivateServerKeywordPage, { generateMetadata } from './no-reset-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightPrivateServerKeywordPage />;
}
