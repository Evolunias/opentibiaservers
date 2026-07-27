import TibiascapeLowExpServerCanadaKeywordPage, { generateMetadata } from './tibiascape-low-exp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLowExpServerCanadaKeywordPage />;
}
