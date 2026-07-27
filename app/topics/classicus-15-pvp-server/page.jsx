import Classicus15PvpServerKeywordPage, { generateMetadata } from './classicus-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15PvpServerKeywordPage />;
}
