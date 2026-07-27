import Originaltibia15CustomMapServerKeywordPage, { generateMetadata } from './originaltibia-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia15CustomMapServerKeywordPage />;
}
