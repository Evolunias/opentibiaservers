import Miracle86CustomMapServerKeywordPage, { generateMetadata } from './miracle-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle86CustomMapServerKeywordPage />;
}
