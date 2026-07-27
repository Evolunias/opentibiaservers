import NoResetLaunchFranceKeywordPage, { generateMetadata } from './no-reset-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchFranceKeywordPage />;
}
