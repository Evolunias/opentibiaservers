import OfficialOriginaltibiaServerKeywordPage, { generateMetadata } from './official-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaServerKeywordPage />;
}
