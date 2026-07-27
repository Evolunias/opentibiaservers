import TibiaraLowExpServerFranceKeywordPage, { generateMetadata } from './tibiara-low-exp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraLowExpServerFranceKeywordPage />;
}
