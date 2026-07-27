import OfficialArcaniarlOtServerKeywordPage, { generateMetadata } from './official-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlOtServerKeywordPage />;
}
