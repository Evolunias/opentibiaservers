import NoResetLaunchUsaKeywordPage, { generateMetadata } from './no-reset-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchUsaKeywordPage />;
}
