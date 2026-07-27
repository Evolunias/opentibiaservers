import EvoTibiaoriginsServersKeywordPage, { generateMetadata } from './evo-tibiaorigins-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaoriginsServersKeywordPage />;
}
