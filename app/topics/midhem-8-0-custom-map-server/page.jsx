import Midhem80CustomMapServerKeywordPage, { generateMetadata } from './midhem-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80CustomMapServerKeywordPage />;
}
