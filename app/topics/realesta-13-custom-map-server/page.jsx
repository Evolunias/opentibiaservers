import Realesta13CustomMapServerKeywordPage, { generateMetadata } from './realesta-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13CustomMapServerKeywordPage />;
}
