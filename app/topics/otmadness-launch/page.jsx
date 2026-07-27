import OtmadnessLaunchKeywordPage, { generateMetadata } from './otmadness-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessLaunchKeywordPage />;
}
