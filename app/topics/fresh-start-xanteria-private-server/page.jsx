import FreshStartXanteriaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaPrivateServerKeywordPage />;
}
