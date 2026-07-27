import PopularRealestaOfficialKeywordPage, { generateMetadata } from './popular-realesta-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOfficialKeywordPage />;
}
