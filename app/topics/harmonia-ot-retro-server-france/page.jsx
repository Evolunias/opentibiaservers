import HarmoniaOtRetroServerFranceKeywordPage, { generateMetadata } from './harmonia-ot-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtRetroServerFranceKeywordPage />;
}
