import NoResetLaunchCanadaKeywordPage, { generateMetadata } from './no-reset-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchCanadaKeywordPage />;
}
