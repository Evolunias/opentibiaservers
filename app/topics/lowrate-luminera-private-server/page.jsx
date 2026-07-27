import LowrateLumineraPrivateServerKeywordPage, { generateMetadata } from './lowrate-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraPrivateServerKeywordPage />;
}
