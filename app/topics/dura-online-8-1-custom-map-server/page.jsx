import DuraOnline81CustomMapServerKeywordPage, { generateMetadata } from './dura-online-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline81CustomMapServerKeywordPage />;
}
