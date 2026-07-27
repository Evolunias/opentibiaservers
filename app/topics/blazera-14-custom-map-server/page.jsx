import Blazera14CustomMapServerKeywordPage, { generateMetadata } from './blazera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14CustomMapServerKeywordPage />;
}
