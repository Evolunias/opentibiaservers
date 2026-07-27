import Rubinot80CustomMapServerKeywordPage, { generateMetadata } from './rubinot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot80CustomMapServerKeywordPage />;
}
