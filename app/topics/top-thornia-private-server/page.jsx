import TopThorniaPrivateServerKeywordPage, { generateMetadata } from './top-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaPrivateServerKeywordPage />;
}
