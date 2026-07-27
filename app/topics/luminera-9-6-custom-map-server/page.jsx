import Luminera96CustomMapServerKeywordPage, { generateMetadata } from './luminera-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96CustomMapServerKeywordPage />;
}
