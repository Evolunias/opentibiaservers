import TibiantisRetroServerFranceKeywordPage, { generateMetadata } from './tibiantis-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisRetroServerFranceKeywordPage />;
}
