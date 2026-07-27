import OtServerListPvpKeywordPage, { generateMetadata } from './ot-server-list-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListPvpKeywordPage />;
}
