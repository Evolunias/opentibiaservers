import OfficialArcaniarlRegisterKeywordPage, { generateMetadata } from './official-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlRegisterKeywordPage />;
}
