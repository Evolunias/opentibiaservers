import OlderaPvpKeywordPage, { generateMetadata } from './oldera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpKeywordPage />;
}
