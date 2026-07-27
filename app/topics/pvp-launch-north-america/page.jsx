import PvpLaunchNorthAmericaKeywordPage, { generateMetadata } from './pvp-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchNorthAmericaKeywordPage />;
}
