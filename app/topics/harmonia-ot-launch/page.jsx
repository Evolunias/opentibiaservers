import HarmoniaOtLaunchKeywordPage, { generateMetadata } from './harmonia-ot-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtLaunchKeywordPage />;
}
