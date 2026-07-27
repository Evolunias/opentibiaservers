import OfficialOlderaPrivateServerKeywordPage, { generateMetadata } from './official-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaPrivateServerKeywordPage />;
}
