import OtmadnessRetroServerGermanyKeywordPage, { generateMetadata } from './otmadness-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRetroServerGermanyKeywordPage />;
}
