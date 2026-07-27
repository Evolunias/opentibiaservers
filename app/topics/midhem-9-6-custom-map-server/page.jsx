import Midhem96CustomMapServerKeywordPage, { generateMetadata } from './midhem-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96CustomMapServerKeywordPage />;
}
