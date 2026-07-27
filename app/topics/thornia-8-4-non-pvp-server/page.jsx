import Thornia84NonPvpServerKeywordPage, { generateMetadata } from './thornia-8-4-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84NonPvpServerKeywordPage />;
}
