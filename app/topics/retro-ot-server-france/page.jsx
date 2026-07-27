import RetroOtServerFranceKeywordPage, { generateMetadata } from './retro-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerFranceKeywordPage />;
}
