import Carlinot96CustomMapServerKeywordPage, { generateMetadata } from './carlinot-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot96CustomMapServerKeywordPage />;
}
