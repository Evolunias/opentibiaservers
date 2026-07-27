import DuraOnline84CustomMapServerKeywordPage, { generateMetadata } from './dura-online-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline84CustomMapServerKeywordPage />;
}
