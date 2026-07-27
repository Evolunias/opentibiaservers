import Luminera74EvoServerKeywordPage, { generateMetadata } from './luminera-7-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74EvoServerKeywordPage />;
}
