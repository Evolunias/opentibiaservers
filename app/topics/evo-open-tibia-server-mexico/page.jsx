import EvoOpenTibiaServerMexicoKeywordPage, { generateMetadata } from './evo-open-tibia-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerMexicoKeywordPage />;
}
