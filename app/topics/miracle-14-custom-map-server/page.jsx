import Miracle14CustomMapServerKeywordPage, { generateMetadata } from './miracle-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14CustomMapServerKeywordPage />;
}
