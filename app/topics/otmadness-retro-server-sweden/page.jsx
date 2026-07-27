import OtmadnessRetroServerSwedenKeywordPage, { generateMetadata } from './otmadness-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRetroServerSwedenKeywordPage />;
}
