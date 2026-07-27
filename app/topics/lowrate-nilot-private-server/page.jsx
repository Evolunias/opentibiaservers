import LowrateNilotPrivateServerKeywordPage, { generateMetadata } from './lowrate-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotPrivateServerKeywordPage />;
}
