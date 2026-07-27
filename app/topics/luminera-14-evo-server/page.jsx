import Luminera14EvoServerKeywordPage, { generateMetadata } from './luminera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14EvoServerKeywordPage />;
}
