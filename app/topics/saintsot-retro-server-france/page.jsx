import SaintsotRetroServerFranceKeywordPage, { generateMetadata } from './saintsot-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRetroServerFranceKeywordPage />;
}
