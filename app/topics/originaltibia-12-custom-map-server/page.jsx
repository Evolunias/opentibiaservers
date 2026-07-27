import Originaltibia12CustomMapServerKeywordPage, { generateMetadata } from './originaltibia-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia12CustomMapServerKeywordPage />;
}
