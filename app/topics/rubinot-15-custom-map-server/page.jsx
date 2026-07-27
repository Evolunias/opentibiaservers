import Rubinot15CustomMapServerKeywordPage, { generateMetadata } from './rubinot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15CustomMapServerKeywordPage />;
}
