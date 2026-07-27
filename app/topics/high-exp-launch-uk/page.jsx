import HighExpLaunchUkKeywordPage, { generateMetadata } from './high-exp-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchUkKeywordPage />;
}
