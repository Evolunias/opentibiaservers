import DemolidoresEvoServerFranceKeywordPage, { generateMetadata } from './demolidores-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresEvoServerFranceKeywordPage />;
}
