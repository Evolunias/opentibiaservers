import Luminera1098CustomMapServerKeywordPage, { generateMetadata } from './luminera-10-98-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera1098CustomMapServerKeywordPage />;
}
