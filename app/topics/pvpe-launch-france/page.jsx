import PvpeLaunchFranceKeywordPage, { generateMetadata } from './pvpe-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchFranceKeywordPage />;
}
