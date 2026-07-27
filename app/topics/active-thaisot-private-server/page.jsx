import ActiveThaisotPrivateServerKeywordPage, { generateMetadata } from './active-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotPrivateServerKeywordPage />;
}
