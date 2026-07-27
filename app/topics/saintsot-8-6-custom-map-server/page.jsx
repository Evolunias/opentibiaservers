import Saintsot86CustomMapServerKeywordPage, { generateMetadata } from './saintsot-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot86CustomMapServerKeywordPage />;
}
