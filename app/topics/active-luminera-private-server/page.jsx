import ActiveLumineraPrivateServerKeywordPage, { generateMetadata } from './active-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraPrivateServerKeywordPage />;
}
