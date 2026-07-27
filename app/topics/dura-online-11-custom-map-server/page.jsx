import DuraOnline11CustomMapServerKeywordPage, { generateMetadata } from './dura-online-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11CustomMapServerKeywordPage />;
}
