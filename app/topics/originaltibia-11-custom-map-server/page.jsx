import Originaltibia11CustomMapServerKeywordPage, { generateMetadata } from './originaltibia-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11CustomMapServerKeywordPage />;
}
