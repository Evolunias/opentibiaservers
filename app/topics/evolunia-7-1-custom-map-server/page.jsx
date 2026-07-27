import Evolunia71CustomMapServerKeywordPage, { generateMetadata } from './evolunia-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia71CustomMapServerKeywordPage />;
}
