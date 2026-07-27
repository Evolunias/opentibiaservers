import PopularBlazeraOfficialKeywordPage, { generateMetadata } from './popular-blazera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraOfficialKeywordPage />;
}
