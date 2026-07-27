import Classicus14PvpServerKeywordPage, { generateMetadata } from './classicus-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14PvpServerKeywordPage />;
}
