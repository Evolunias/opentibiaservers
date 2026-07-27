import DuraOnline13CustomMapServerKeywordPage, { generateMetadata } from './dura-online-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13CustomMapServerKeywordPage />;
}
