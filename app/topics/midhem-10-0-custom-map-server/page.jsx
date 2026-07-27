import Midhem100CustomMapServerKeywordPage, { generateMetadata } from './midhem-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem100CustomMapServerKeywordPage />;
}
