import Luminera100CustomMapServerKeywordPage, { generateMetadata } from './luminera-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100CustomMapServerKeywordPage />;
}
