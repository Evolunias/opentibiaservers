import Sabrehaven86CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven86CustomMapServerKeywordPage />;
}
