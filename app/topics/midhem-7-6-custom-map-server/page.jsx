import Midhem76CustomMapServerKeywordPage, { generateMetadata } from './midhem-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem76CustomMapServerKeywordPage />;
}
