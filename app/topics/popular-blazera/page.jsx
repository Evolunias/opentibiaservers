import PopularBlazeraKeywordPage, { generateMetadata } from './popular-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraKeywordPage />;
}
