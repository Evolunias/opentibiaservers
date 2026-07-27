import EvoTibiantisServerKeywordPage, { generateMetadata } from './evo-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiantisServerKeywordPage />;
}
