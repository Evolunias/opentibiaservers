import Thornia11NonPvpServerKeywordPage, { generateMetadata } from './thornia-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11NonPvpServerKeywordPage />;
}
