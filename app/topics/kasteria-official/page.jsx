import KasteriaOfficialKeywordPage, { generateMetadata } from './kasteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaOfficialKeywordPage />;
}
