import Tibia86ServerMexicoKeywordPage, { generateMetadata } from './tibia-8-6-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerMexicoKeywordPage />;
}
