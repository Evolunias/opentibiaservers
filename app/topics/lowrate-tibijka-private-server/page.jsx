import LowrateTibijkaPrivateServerKeywordPage, { generateMetadata } from './lowrate-tibijka-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaPrivateServerKeywordPage />;
}
