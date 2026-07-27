import Carlinot80CustomMapServerKeywordPage, { generateMetadata } from './carlinot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot80CustomMapServerKeywordPage />;
}
