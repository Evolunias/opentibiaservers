import Sabrehaven76CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven76CustomMapServerKeywordPage />;
}
