import NoResetSabrehavenPrivateServerKeywordPage, { generateMetadata } from './no-reset-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenPrivateServerKeywordPage />;
}
