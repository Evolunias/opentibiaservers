import Luminera84EvoServerKeywordPage, { generateMetadata } from './luminera-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84EvoServerKeywordPage />;
}
