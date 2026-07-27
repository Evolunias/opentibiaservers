import PopularBlazeraOtServerKeywordPage, { generateMetadata } from './popular-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraOtServerKeywordPage />;
}
