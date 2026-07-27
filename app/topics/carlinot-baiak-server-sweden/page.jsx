import CarlinotBaiakServerSwedenKeywordPage, { generateMetadata } from './carlinot-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotBaiakServerSwedenKeywordPage />;
}
