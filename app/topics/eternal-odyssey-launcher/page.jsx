import EternalOdysseyLauncherKeywordPage, { generateMetadata } from './eternal-odyssey-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyLauncherKeywordPage />;
}
