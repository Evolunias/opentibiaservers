import LowExpLaunchPolandKeywordPage, { generateMetadata } from './low-exp-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchPolandKeywordPage />;
}
