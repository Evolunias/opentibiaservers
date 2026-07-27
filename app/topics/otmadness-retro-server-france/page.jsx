import OtmadnessRetroServerFranceKeywordPage, { generateMetadata } from './otmadness-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRetroServerFranceKeywordPage />;
}
