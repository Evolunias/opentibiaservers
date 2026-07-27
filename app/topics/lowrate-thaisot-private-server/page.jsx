import LowrateThaisotPrivateServerKeywordPage, { generateMetadata } from './lowrate-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotPrivateServerKeywordPage />;
}
