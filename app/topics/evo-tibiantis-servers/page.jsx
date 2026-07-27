import EvoTibiantisServersKeywordPage, { generateMetadata } from './evo-tibiantis-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiantisServersKeywordPage />;
}
