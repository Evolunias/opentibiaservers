import Thornia12PvpServerKeywordPage, { generateMetadata } from './thornia-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12PvpServerKeywordPage />;
}
