import Carlinot76CustomMapServerKeywordPage, { generateMetadata } from './carlinot-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot76CustomMapServerKeywordPage />;
}
