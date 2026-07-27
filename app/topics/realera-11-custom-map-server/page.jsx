import Realera11CustomMapServerKeywordPage, { generateMetadata } from './realera-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11CustomMapServerKeywordPage />;
}
