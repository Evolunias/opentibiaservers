import TibiaPrivateServerMexicoKeywordPage, { generateMetadata } from './tibia-private-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerMexicoKeywordPage />;
}
