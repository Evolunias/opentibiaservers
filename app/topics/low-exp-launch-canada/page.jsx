import LowExpLaunchCanadaKeywordPage, { generateMetadata } from './low-exp-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchCanadaKeywordPage />;
}
