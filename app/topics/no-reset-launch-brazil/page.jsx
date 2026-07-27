import NoResetLaunchBrazilKeywordPage, { generateMetadata } from './no-reset-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchBrazilKeywordPage />;
}
