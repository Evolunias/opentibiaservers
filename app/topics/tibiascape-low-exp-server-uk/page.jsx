import TibiascapeLowExpServerUkKeywordPage, { generateMetadata } from './tibiascape-low-exp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLowExpServerUkKeywordPage />;
}
