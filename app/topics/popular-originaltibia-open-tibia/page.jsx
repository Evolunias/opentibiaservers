import PopularOriginaltibiaOpenTibiaKeywordPage, { generateMetadata } from './popular-originaltibia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaOpenTibiaKeywordPage />;
}
