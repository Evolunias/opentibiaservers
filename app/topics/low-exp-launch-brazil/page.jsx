import LowExpLaunchBrazilKeywordPage, { generateMetadata } from './low-exp-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchBrazilKeywordPage />;
}
