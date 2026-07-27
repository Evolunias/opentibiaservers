import PvpLaunchFranceKeywordPage, { generateMetadata } from './pvp-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchFranceKeywordPage />;
}
