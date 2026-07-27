import Tibiascape14EvoServerKeywordPage, { generateMetadata } from './tibiascape-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14EvoServerKeywordPage />;
}
