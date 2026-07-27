import EvoluniaNorthAmericaServerKeywordPage, { generateMetadata } from './evolunia-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaNorthAmericaServerKeywordPage />;
}
