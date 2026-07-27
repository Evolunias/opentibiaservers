import EvoLaunchLatinAmericaKeywordPage, { generateMetadata } from './evo-launch-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchLatinAmericaKeywordPage />;
}
