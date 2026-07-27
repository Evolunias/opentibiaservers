import HighrateThorniaPrivateServerKeywordPage, { generateMetadata } from './highrate-thornia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaPrivateServerKeywordPage />;
}
