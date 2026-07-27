import LowExpLaunchUkKeywordPage, { generateMetadata } from './low-exp-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchUkKeywordPage />;
}
