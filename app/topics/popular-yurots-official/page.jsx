import PopularYurotsOfficialKeywordPage, { generateMetadata } from './popular-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsOfficialKeywordPage />;
}
