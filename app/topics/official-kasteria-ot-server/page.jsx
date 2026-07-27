import OfficialKasteriaOtServerKeywordPage, { generateMetadata } from './official-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaOtServerKeywordPage />;
}
