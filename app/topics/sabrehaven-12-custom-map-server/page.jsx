import Sabrehaven12CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12CustomMapServerKeywordPage />;
}
