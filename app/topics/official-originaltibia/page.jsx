import OfficialOriginaltibiaKeywordPage, { generateMetadata } from './official-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaKeywordPage />;
}
