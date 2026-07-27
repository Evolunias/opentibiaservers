import Sabrehaven11CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11CustomMapServerKeywordPage />;
}
