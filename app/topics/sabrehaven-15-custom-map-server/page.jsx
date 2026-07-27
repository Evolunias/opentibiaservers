import Sabrehaven15CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15CustomMapServerKeywordPage />;
}
