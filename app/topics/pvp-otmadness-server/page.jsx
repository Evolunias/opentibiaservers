import PvpOtmadnessServerKeywordPage, { generateMetadata } from './pvp-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOtmadnessServerKeywordPage />;
}
