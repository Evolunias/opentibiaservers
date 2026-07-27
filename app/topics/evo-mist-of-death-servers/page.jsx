import EvoMistOfDeathServersKeywordPage, { generateMetadata } from './evo-mist-of-death-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMistOfDeathServersKeywordPage />;
}
