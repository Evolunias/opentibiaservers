import Carlinot11BaiakServerKeywordPage, { generateMetadata } from './carlinot-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11BaiakServerKeywordPage />;
}
