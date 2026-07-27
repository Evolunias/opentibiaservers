import FreshStartLumineraPrivateServerKeywordPage, { generateMetadata } from './fresh-start-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraPrivateServerKeywordPage />;
}
