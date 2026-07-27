import TibiascapeLowExpServerGermanyKeywordPage, { generateMetadata } from './tibiascape-low-exp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLowExpServerGermanyKeywordPage />;
}
