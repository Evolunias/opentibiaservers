import Miracle84CustomMapServerKeywordPage, { generateMetadata } from './miracle-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle84CustomMapServerKeywordPage />;
}
