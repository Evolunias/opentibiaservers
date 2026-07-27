import AureraGlobalChileServersKeywordPage, { generateMetadata } from './aurera-global-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalChileServersKeywordPage />;
}
