import Thornia12NonPvpServerKeywordPage, { generateMetadata } from './thornia-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12NonPvpServerKeywordPage />;
}
