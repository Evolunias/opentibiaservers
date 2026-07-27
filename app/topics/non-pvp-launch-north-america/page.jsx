import NonPvpLaunchNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchNorthAmericaKeywordPage />;
}
