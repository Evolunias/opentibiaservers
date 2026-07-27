import LowrateTibianusPrivateServerKeywordPage, { generateMetadata } from './lowrate-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusPrivateServerKeywordPage />;
}
