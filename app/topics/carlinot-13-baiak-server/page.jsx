import Carlinot13BaiakServerKeywordPage, { generateMetadata } from './carlinot-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13BaiakServerKeywordPage />;
}
