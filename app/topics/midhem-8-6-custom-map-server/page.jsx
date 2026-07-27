import Midhem86CustomMapServerKeywordPage, { generateMetadata } from './midhem-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem86CustomMapServerKeywordPage />;
}
