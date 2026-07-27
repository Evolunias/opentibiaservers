import Eldera14CustomMapServerKeywordPage, { generateMetadata } from './eldera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14CustomMapServerKeywordPage />;
}
