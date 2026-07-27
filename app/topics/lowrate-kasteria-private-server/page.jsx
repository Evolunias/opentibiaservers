import LowrateKasteriaPrivateServerKeywordPage, { generateMetadata } from './lowrate-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaPrivateServerKeywordPage />;
}
