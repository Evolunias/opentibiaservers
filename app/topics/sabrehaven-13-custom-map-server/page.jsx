import Sabrehaven13CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13CustomMapServerKeywordPage />;
}
