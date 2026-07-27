import Saintsot11CustomMapServerKeywordPage, { generateMetadata } from './saintsot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11CustomMapServerKeywordPage />;
}
