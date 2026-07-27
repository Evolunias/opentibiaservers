import Rubinot14CustomMapServerKeywordPage, { generateMetadata } from './rubinot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot14CustomMapServerKeywordPage />;
}
