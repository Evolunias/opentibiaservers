import Luminera96EvoServerKeywordPage, { generateMetadata } from './luminera-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96EvoServerKeywordPage />;
}
