import FreshStartTibijkaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-tibijka-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaPrivateServerKeywordPage />;
}
