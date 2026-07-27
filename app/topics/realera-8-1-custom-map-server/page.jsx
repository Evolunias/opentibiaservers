import Realera81CustomMapServerKeywordPage, { generateMetadata } from './realera-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera81CustomMapServerKeywordPage />;
}
