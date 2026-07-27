import PopularBlazeraOtKeywordPage, { generateMetadata } from './popular-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraOtKeywordPage />;
}
