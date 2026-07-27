import EvoAureraGlobalServersKeywordPage, { generateMetadata } from './evo-aurera-global-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoAureraGlobalServersKeywordPage />;
}
