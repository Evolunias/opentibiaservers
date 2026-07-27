import Evolunia96CustomMapServerKeywordPage, { generateMetadata } from './evolunia-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia96CustomMapServerKeywordPage />;
}
