import HighExpLaunchPolandKeywordPage, { generateMetadata } from './high-exp-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchPolandKeywordPage />;
}
