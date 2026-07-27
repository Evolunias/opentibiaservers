import OfficialOriginaltibiaClientKeywordPage, { generateMetadata } from './official-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaClientKeywordPage />;
}
