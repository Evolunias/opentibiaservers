import Luminera76EvoServerKeywordPage, { generateMetadata } from './luminera-7-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76EvoServerKeywordPage />;
}
