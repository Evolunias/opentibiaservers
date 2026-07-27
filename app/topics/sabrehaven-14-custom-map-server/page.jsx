import Sabrehaven14CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14CustomMapServerKeywordPage />;
}
