import EvoLaunchUkKeywordPage, { generateMetadata } from './evo-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchUkKeywordPage />;
}
