import Realera14CustomMapServerKeywordPage, { generateMetadata } from './realera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera14CustomMapServerKeywordPage />;
}
