import TibiaraClientKeywordPage, { generateMetadata } from './tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraClientKeywordPage />;
}
