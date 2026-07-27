import Evolunia84CustomMapServerKeywordPage, { generateMetadata } from './evolunia-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia84CustomMapServerKeywordPage />;
}
