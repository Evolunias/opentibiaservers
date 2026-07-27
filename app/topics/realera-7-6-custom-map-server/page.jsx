import Realera76CustomMapServerKeywordPage, { generateMetadata } from './realera-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera76CustomMapServerKeywordPage />;
}
