import Rubinot13CustomMapServerKeywordPage, { generateMetadata } from './rubinot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13CustomMapServerKeywordPage />;
}
