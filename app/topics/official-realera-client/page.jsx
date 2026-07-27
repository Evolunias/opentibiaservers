import OfficialRealeraClientKeywordPage, { generateMetadata } from './official-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraClientKeywordPage />;
}
