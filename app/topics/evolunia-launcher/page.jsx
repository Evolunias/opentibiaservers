import EvoluniaLauncherKeywordPage, { generateMetadata } from './evolunia-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaLauncherKeywordPage />;
}
