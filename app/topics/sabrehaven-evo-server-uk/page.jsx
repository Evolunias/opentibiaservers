import SabrehavenEvoServerUkKeywordPage, { generateMetadata } from './sabrehaven-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenEvoServerUkKeywordPage />;
}
