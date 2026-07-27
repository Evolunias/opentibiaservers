import OfficialCanobPrivateServerKeywordPage, { generateMetadata } from './official-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobPrivateServerKeywordPage />;
}
