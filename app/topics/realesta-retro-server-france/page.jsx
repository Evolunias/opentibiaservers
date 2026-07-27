import RealestaRetroServerFranceKeywordPage, { generateMetadata } from './realesta-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRetroServerFranceKeywordPage />;
}
