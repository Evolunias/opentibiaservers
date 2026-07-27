import HarmoniaOtLauncherKeywordPage, { generateMetadata } from './harmonia-ot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtLauncherKeywordPage />;
}
