import HighExpLaunchEuropeKeywordPage, { generateMetadata } from './high-exp-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchEuropeKeywordPage />;
}
