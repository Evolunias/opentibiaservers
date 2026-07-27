import DuraOnline80CustomMapServerKeywordPage, { generateMetadata } from './dura-online-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline80CustomMapServerKeywordPage />;
}
