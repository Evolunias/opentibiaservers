import OfficialArcaniarlClientKeywordPage, { generateMetadata } from './official-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlClientKeywordPage />;
}
