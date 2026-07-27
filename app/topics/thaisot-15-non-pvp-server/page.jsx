import Thaisot15NonPvpServerKeywordPage, { generateMetadata } from './thaisot-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15NonPvpServerKeywordPage />;
}
