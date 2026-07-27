import Oldera80NonPvpServerKeywordPage, { generateMetadata } from './oldera-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80NonPvpServerKeywordPage />;
}
