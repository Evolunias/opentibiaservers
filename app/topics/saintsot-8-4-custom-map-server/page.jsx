import Saintsot84CustomMapServerKeywordPage, { generateMetadata } from './saintsot-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot84CustomMapServerKeywordPage />;
}
