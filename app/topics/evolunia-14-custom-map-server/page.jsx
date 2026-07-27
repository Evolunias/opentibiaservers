import Evolunia14CustomMapServerKeywordPage, { generateMetadata } from './evolunia-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14CustomMapServerKeywordPage />;
}
