import Sabrehaven71CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven71CustomMapServerKeywordPage />;
}
