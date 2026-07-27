import EvoLaunchNorthAmericaKeywordPage, { generateMetadata } from './evo-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchNorthAmericaKeywordPage />;
}
