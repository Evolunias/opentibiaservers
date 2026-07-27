import Realera71CustomMapServerKeywordPage, { generateMetadata } from './realera-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera71CustomMapServerKeywordPage />;
}
