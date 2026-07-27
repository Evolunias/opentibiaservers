import LowExpLaunchEuropeKeywordPage, { generateMetadata } from './low-exp-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchEuropeKeywordPage />;
}
