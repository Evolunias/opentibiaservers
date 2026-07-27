import Saintsot81CustomMapServerKeywordPage, { generateMetadata } from './saintsot-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot81CustomMapServerKeywordPage />;
}
