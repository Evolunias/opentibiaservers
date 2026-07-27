import DuraOnline14CustomMapServerKeywordPage, { generateMetadata } from './dura-online-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline14CustomMapServerKeywordPage />;
}
