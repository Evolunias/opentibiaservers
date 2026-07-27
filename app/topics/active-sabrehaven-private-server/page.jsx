import ActiveSabrehavenPrivateServerKeywordPage, { generateMetadata } from './active-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenPrivateServerKeywordPage />;
}
