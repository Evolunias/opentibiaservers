import EvoOpenTibiaServerFranceKeywordPage, { generateMetadata } from './evo-open-tibia-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerFranceKeywordPage />;
}
