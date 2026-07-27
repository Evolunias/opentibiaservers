import Midhem14CustomMapServerKeywordPage, { generateMetadata } from './midhem-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14CustomMapServerKeywordPage />;
}
