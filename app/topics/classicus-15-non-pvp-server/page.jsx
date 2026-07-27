import Classicus15NonPvpServerKeywordPage, { generateMetadata } from './classicus-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15NonPvpServerKeywordPage />;
}
