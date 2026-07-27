import FreshStartNepreniaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaPrivateServerKeywordPage />;
}
