import Carlinot14CustomMapServerKeywordPage, { generateMetadata } from './carlinot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot14CustomMapServerKeywordPage />;
}
