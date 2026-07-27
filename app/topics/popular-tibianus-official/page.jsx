import PopularTibianusOfficialKeywordPage, { generateMetadata } from './popular-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusOfficialKeywordPage />;
}
