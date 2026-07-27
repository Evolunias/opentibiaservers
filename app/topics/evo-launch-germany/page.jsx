import EvoLaunchGermanyKeywordPage, { generateMetadata } from './evo-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchGermanyKeywordPage />;
}
