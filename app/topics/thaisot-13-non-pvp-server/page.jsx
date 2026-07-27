import Thaisot13NonPvpServerKeywordPage, { generateMetadata } from './thaisot-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13NonPvpServerKeywordPage />;
}
