import OriginaltibiaOfficialKeywordPage, { generateMetadata } from './originaltibia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaOfficialKeywordPage />;
}
