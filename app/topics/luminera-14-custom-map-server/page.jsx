import Luminera14CustomMapServerKeywordPage, { generateMetadata } from './luminera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14CustomMapServerKeywordPage />;
}
