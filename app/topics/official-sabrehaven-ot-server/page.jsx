import OfficialSabrehavenOtServerKeywordPage, { generateMetadata } from './official-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenOtServerKeywordPage />;
}
