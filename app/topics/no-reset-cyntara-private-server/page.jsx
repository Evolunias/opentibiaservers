import NoResetCyntaraPrivateServerKeywordPage, { generateMetadata } from './no-reset-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraPrivateServerKeywordPage />;
}
