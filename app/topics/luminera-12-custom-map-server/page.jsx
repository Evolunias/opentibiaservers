import Luminera12CustomMapServerKeywordPage, { generateMetadata } from './luminera-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12CustomMapServerKeywordPage />;
}
