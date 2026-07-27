import LowExpLaunchUsaKeywordPage, { generateMetadata } from './low-exp-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchUsaKeywordPage />;
}
