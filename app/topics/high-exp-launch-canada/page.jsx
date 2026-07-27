import HighExpLaunchCanadaKeywordPage, { generateMetadata } from './high-exp-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchCanadaKeywordPage />;
}
