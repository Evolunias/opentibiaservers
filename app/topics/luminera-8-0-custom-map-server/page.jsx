import Luminera80CustomMapServerKeywordPage, { generateMetadata } from './luminera-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80CustomMapServerKeywordPage />;
}
