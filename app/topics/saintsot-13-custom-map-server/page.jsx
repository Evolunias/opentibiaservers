import Saintsot13CustomMapServerKeywordPage, { generateMetadata } from './saintsot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13CustomMapServerKeywordPage />;
}
