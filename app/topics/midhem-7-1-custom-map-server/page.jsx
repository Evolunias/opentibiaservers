import Midhem71CustomMapServerKeywordPage, { generateMetadata } from './midhem-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71CustomMapServerKeywordPage />;
}
