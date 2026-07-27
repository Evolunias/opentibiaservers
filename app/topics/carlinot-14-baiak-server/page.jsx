import Carlinot14BaiakServerKeywordPage, { generateMetadata } from './carlinot-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14BaiakServerKeywordPage />;
}
