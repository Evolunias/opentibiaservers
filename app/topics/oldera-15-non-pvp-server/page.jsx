import Oldera15NonPvpServerKeywordPage, { generateMetadata } from './oldera-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15NonPvpServerKeywordPage />;
}
