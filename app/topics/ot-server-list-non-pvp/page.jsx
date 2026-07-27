import OtServerListNonPvpKeywordPage, { generateMetadata } from './ot-server-list-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListNonPvpKeywordPage />;
}
