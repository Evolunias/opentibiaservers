import PopularBlazeraServerKeywordPage, { generateMetadata } from './popular-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraServerKeywordPage />;
}
