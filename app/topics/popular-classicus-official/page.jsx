import PopularClassicusOfficialKeywordPage, { generateMetadata } from './popular-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusOfficialKeywordPage />;
}
