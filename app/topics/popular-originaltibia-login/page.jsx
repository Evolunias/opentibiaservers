import PopularOriginaltibiaLoginKeywordPage, { generateMetadata } from './popular-originaltibia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaLoginKeywordPage />;
}
