import EvoLaunchBrazilKeywordPage, { generateMetadata } from './evo-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchBrazilKeywordPage />;
}
