import Realera84CustomMapServerKeywordPage, { generateMetadata } from './realera-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera84CustomMapServerKeywordPage />;
}
