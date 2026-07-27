import Carlinot15CustomMapServerKeywordPage, { generateMetadata } from './carlinot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot15CustomMapServerKeywordPage />;
}
