import Alastera84CustomMapServerKeywordPage, { generateMetadata } from './alastera-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84CustomMapServerKeywordPage />;
}
