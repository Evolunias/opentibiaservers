import PopularCarlinotOfficialKeywordPage, { generateMetadata } from './popular-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotOfficialKeywordPage />;
}
