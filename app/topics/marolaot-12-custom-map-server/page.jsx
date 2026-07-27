import Marolaot12CustomMapServerKeywordPage, { generateMetadata } from './marolaot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12CustomMapServerKeywordPage />;
}
