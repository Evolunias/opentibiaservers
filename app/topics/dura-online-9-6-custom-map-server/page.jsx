import DuraOnline96CustomMapServerKeywordPage, { generateMetadata } from './dura-online-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline96CustomMapServerKeywordPage />;
}
