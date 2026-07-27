import TibiascapeLowExpServerPolandKeywordPage, { generateMetadata } from './tibiascape-low-exp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLowExpServerPolandKeywordPage />;
}
