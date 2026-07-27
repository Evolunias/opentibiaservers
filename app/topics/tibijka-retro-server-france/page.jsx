import TibijkaRetroServerFranceKeywordPage, { generateMetadata } from './tibijka-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRetroServerFranceKeywordPage />;
}
