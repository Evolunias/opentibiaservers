import Sabrehaven74CustomMapServerKeywordPage, { generateMetadata } from './sabrehaven-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven74CustomMapServerKeywordPage />;
}
