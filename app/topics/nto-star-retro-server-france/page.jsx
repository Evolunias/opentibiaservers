import NtoStarRetroServerFranceKeywordPage, { generateMetadata } from './nto-star-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerFranceKeywordPage />;
}
