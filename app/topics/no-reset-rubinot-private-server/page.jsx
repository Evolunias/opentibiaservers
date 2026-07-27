import NoResetRubinotPrivateServerKeywordPage, { generateMetadata } from './no-reset-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotPrivateServerKeywordPage />;
}
