import OfficialRealestaClientKeywordPage, { generateMetadata } from './official-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaClientKeywordPage />;
}
