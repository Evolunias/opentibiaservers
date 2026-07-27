import OfficialRealeraServerKeywordPage, { generateMetadata } from './official-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraServerKeywordPage />;
}
