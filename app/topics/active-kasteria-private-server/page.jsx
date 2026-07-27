import ActiveKasteriaPrivateServerKeywordPage, { generateMetadata } from './active-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaPrivateServerKeywordPage />;
}
