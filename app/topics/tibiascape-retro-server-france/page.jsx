import TibiascapeRetroServerFranceKeywordPage, { generateMetadata } from './tibiascape-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRetroServerFranceKeywordPage />;
}
