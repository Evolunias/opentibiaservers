import Evolunia12PvpServerKeywordPage, { generateMetadata } from './evolunia-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12PvpServerKeywordPage />;
}
