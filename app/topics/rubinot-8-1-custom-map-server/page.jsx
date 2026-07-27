import Rubinot81CustomMapServerKeywordPage, { generateMetadata } from './rubinot-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot81CustomMapServerKeywordPage />;
}
