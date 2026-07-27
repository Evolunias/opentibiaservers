import Evolunia15CustomMapServerKeywordPage, { generateMetadata } from './evolunia-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15CustomMapServerKeywordPage />;
}
