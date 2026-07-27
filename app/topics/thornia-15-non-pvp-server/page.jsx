import Thornia15NonPvpServerKeywordPage, { generateMetadata } from './thornia-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15NonPvpServerKeywordPage />;
}
