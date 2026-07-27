import TopSabrehavenPrivateServerKeywordPage, { generateMetadata } from './top-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenPrivateServerKeywordPage />;
}
