import PopularRealeraOfficialKeywordPage, { generateMetadata } from './popular-realera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraOfficialKeywordPage />;
}
