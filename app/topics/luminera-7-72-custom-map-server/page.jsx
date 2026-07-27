import Luminera772CustomMapServerKeywordPage, { generateMetadata } from './luminera-7-72-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera772CustomMapServerKeywordPage />;
}
