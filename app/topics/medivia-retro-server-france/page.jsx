import MediviaRetroServerFranceKeywordPage, { generateMetadata } from './medivia-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerFranceKeywordPage />;
}
