import EvoTibianusServersKeywordPage, { generateMetadata } from './evo-tibianus-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibianusServersKeywordPage />;
}
