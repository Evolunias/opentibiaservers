import OfficialSabrehavenServerKeywordPage, { generateMetadata } from './official-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenServerKeywordPage />;
}
