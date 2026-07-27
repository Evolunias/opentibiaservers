import OtmadnessLauncherKeywordPage, { generateMetadata } from './otmadness-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessLauncherKeywordPage />;
}
