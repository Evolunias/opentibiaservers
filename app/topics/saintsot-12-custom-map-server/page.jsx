import Saintsot12CustomMapServerKeywordPage, { generateMetadata } from './saintsot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12CustomMapServerKeywordPage />;
}
