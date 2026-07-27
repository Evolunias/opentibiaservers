import FreshStartKasteriaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaPrivateServerKeywordPage />;
}
