import Miracle96CustomMapServerKeywordPage, { generateMetadata } from './miracle-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle96CustomMapServerKeywordPage />;
}
