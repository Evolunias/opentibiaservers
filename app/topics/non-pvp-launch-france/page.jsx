import NonPvpLaunchFranceKeywordPage, { generateMetadata } from './non-pvp-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchFranceKeywordPage />;
}
