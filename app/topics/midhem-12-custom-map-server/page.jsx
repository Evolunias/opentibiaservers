import Midhem12CustomMapServerKeywordPage, { generateMetadata } from './midhem-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12CustomMapServerKeywordPage />;
}
