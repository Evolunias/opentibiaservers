import Luminera15EvoServerKeywordPage, { generateMetadata } from './luminera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15EvoServerKeywordPage />;
}
