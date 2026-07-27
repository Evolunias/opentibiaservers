import Luminera71EvoServerKeywordPage, { generateMetadata } from './luminera-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71EvoServerKeywordPage />;
}
