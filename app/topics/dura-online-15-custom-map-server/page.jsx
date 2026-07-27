import DuraOnline15CustomMapServerKeywordPage, { generateMetadata } from './dura-online-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15CustomMapServerKeywordPage />;
}
