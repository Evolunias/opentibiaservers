import NoResetLaunchUkKeywordPage, { generateMetadata } from './no-reset-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchUkKeywordPage />;
}
