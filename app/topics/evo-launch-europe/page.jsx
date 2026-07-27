import EvoLaunchEuropeKeywordPage, { generateMetadata } from './evo-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchEuropeKeywordPage />;
}
