import FreshStartClassicusPrivateServerKeywordPage, { generateMetadata } from './fresh-start-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusPrivateServerKeywordPage />;
}
