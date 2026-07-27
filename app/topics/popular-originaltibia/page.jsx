import PopularOriginaltibiaKeywordPage, { generateMetadata } from './popular-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaKeywordPage />;
}
