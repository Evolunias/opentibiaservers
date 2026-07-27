import Evolunia100CustomMapServerKeywordPage, { generateMetadata } from './evolunia-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia100CustomMapServerKeywordPage />;
}
