import Evolunia14EvoServerKeywordPage, { generateMetadata } from './evolunia-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14EvoServerKeywordPage />;
}
