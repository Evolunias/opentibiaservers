import EvoluniaPvpKeywordPage, { generateMetadata } from './evolunia-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaPvpKeywordPage />;
}
