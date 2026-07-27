import OtmadnessRetroServerUsaKeywordPage, { generateMetadata } from './otmadness-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRetroServerUsaKeywordPage />;
}
