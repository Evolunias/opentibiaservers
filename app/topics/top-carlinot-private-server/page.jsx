import TopCarlinotPrivateServerKeywordPage, { generateMetadata } from './top-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotPrivateServerKeywordPage />;
}
