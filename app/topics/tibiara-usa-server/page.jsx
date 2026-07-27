import TibiaraUsaServerKeywordPage, { generateMetadata } from './tibiara-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraUsaServerKeywordPage />;
}
