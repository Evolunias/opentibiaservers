import NoResetLaunchEuropeKeywordPage, { generateMetadata } from './no-reset-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchEuropeKeywordPage />;
}
