import OtmadnessEvoServerUsaKeywordPage, { generateMetadata } from './otmadness-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessEvoServerUsaKeywordPage />;
}
