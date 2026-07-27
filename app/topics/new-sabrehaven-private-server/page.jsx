import NewSabrehavenPrivateServerKeywordPage, { generateMetadata } from './new-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenPrivateServerKeywordPage />;
}
