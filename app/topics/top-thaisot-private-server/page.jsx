import TopThaisotPrivateServerKeywordPage, { generateMetadata } from './top-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotPrivateServerKeywordPage />;
}
