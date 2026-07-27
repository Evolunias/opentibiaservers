import EvoluniaSwedenServersKeywordPage, { generateMetadata } from './evolunia-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSwedenServersKeywordPage />;
}
