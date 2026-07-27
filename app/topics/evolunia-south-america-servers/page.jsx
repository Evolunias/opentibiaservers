import EvoluniaSouthAmericaServersKeywordPage, { generateMetadata } from './evolunia-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSouthAmericaServersKeywordPage />;
}
