import EvoLaunchCanadaKeywordPage, { generateMetadata } from './evo-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchCanadaKeywordPage />;
}
