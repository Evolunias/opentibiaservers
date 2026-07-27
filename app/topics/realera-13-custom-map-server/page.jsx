import Realera13CustomMapServerKeywordPage, { generateMetadata } from './realera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13CustomMapServerKeywordPage />;
}
