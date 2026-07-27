import Sabrehaven81CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven81CustomMapServerKeywordPage />;
}
