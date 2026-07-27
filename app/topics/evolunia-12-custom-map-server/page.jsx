import Evolunia12CustomMapServerKeywordPage, { generateMetadata } from './evolunia-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12CustomMapServerKeywordPage />;
}
