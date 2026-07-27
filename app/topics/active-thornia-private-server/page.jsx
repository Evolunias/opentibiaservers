import ActiveThorniaPrivateServerKeywordPage, { generateMetadata } from './active-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaPrivateServerKeywordPage />;
}
