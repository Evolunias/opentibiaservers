import Evolunia15EvoServerKeywordPage, { generateMetadata } from './evolunia-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15EvoServerKeywordPage />;
}
