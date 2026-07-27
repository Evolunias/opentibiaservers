import Carlinot12BaiakServerKeywordPage, { generateMetadata } from './carlinot-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12BaiakServerKeywordPage />;
}
