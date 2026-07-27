import Medivia12CustomMapServerKeywordPage, { generateMetadata } from './medivia-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12CustomMapServerKeywordPage />;
}
