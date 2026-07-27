import FreshStartCarlinotPrivateServerKeywordPage, { generateMetadata } from './fresh-start-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotPrivateServerKeywordPage />;
}
