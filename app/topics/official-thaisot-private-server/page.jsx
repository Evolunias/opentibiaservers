import OfficialThaisotPrivateServerKeywordPage, { generateMetadata } from './official-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotPrivateServerKeywordPage />;
}
