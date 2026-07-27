import EvoLaunchUsaKeywordPage, { generateMetadata } from './evo-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchUsaKeywordPage />;
}
