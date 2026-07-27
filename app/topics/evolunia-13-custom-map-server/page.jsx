import Evolunia13CustomMapServerKeywordPage, { generateMetadata } from './evolunia-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13CustomMapServerKeywordPage />;
}
