import Thornia12CustomMapServerKeywordPage, { generateMetadata } from './thornia-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12CustomMapServerKeywordPage />;
}
