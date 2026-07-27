import LowExpLaunchNorthAmericaKeywordPage, { generateMetadata } from './low-exp-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchNorthAmericaKeywordPage />;
}
