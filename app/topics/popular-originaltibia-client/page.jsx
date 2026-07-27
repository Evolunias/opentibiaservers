import PopularOriginaltibiaClientKeywordPage, { generateMetadata } from './popular-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaClientKeywordPage />;
}
