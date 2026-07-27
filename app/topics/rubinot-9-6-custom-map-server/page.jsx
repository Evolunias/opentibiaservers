import Rubinot96CustomMapServerKeywordPage, { generateMetadata } from './rubinot-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot96CustomMapServerKeywordPage />;
}
