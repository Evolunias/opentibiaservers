import OlderaPvpServerPolandKeywordPage, { generateMetadata } from './oldera-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpServerPolandKeywordPage />;
}
