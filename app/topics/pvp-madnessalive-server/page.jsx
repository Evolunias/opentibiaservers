import PvpMadnessaliveServerKeywordPage, { generateMetadata } from './pvp-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpMadnessaliveServerKeywordPage />;
}
