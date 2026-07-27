import Midhem74CustomMapServerKeywordPage, { generateMetadata } from './midhem-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem74CustomMapServerKeywordPage />;
}
