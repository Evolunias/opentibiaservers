import Miracle12CustomMapServerKeywordPage, { generateMetadata } from './miracle-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12CustomMapServerKeywordPage />;
}
