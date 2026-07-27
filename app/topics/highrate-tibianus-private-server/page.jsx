import HighrateTibianusPrivateServerKeywordPage, { generateMetadata } from './highrate-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusPrivateServerKeywordPage />;
}
