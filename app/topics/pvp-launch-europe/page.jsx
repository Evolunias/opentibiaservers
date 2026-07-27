import PvpLaunchEuropeKeywordPage, { generateMetadata } from './pvp-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchEuropeKeywordPage />;
}
