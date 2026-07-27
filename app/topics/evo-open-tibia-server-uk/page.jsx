import EvoOpenTibiaServerUkKeywordPage, { generateMetadata } from './evo-open-tibia-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerUkKeywordPage />;
}
