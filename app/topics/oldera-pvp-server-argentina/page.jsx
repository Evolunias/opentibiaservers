import OlderaPvpServerArgentinaKeywordPage, { generateMetadata } from './oldera-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpServerArgentinaKeywordPage />;
}
