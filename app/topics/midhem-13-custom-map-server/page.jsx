import Midhem13CustomMapServerKeywordPage, { generateMetadata } from './midhem-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13CustomMapServerKeywordPage />;
}
