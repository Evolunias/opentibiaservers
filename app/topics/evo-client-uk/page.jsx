import EvoClientUkKeywordPage, { generateMetadata } from './evo-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientUkKeywordPage />;
}
