import HighrateLumineraPrivateServerKeywordPage, { generateMetadata } from './highrate-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraPrivateServerKeywordPage />;
}
