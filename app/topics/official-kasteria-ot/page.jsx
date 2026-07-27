import OfficialKasteriaOtKeywordPage, { generateMetadata } from './official-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaOtKeywordPage />;
}
