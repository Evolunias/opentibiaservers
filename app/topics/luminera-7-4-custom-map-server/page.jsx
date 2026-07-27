import Luminera74CustomMapServerKeywordPage, { generateMetadata } from './luminera-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74CustomMapServerKeywordPage />;
}
