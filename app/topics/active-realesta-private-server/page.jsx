import ActiveRealestaPrivateServerKeywordPage, { generateMetadata } from './active-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaPrivateServerKeywordPage />;
}
