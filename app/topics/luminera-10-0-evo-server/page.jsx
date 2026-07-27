import Luminera100EvoServerKeywordPage, { generateMetadata } from './luminera-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100EvoServerKeywordPage />;
}
