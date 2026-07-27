import OlderaPrivateServerKeywordPage, { generateMetadata } from './oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPrivateServerKeywordPage />;
}
