import FreshStartYurotsPrivateServerKeywordPage, { generateMetadata } from './fresh-start-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsPrivateServerKeywordPage />;
}
