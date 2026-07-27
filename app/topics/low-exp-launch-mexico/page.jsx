import LowExpLaunchMexicoKeywordPage, { generateMetadata } from './low-exp-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchMexicoKeywordPage />;
}
