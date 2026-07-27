import PopularOriginaltibiaServerKeywordPage, { generateMetadata } from './popular-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaServerKeywordPage />;
}
