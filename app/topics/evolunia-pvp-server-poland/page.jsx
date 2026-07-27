import EvoluniaPvpServerPolandKeywordPage, { generateMetadata } from './evolunia-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaPvpServerPolandKeywordPage />;
}
