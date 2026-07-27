import AureraGlobalPolandServersKeywordPage, { generateMetadata } from './aurera-global-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalPolandServersKeywordPage />;
}
