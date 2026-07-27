import CalmeraOtRetroServerFranceKeywordPage, { generateMetadata } from './calmera-ot-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtRetroServerFranceKeywordPage />;
}
