import HighExpLaunchUsaKeywordPage, { generateMetadata } from './high-exp-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchUsaKeywordPage />;
}
