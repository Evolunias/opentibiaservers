import LowExpLaunchGermanyKeywordPage, { generateMetadata } from './low-exp-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchGermanyKeywordPage />;
}
