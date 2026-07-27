import Realera80CustomMapServerKeywordPage, { generateMetadata } from './realera-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera80CustomMapServerKeywordPage />;
}
