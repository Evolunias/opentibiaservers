import SabrehavenPrivateServerKeywordPage, { generateMetadata } from './sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPrivateServerKeywordPage />;
}
