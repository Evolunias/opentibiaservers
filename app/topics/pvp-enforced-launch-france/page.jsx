import PvpEnforcedLaunchFranceKeywordPage, { generateMetadata } from './pvp-enforced-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLaunchFranceKeywordPage />;
}
