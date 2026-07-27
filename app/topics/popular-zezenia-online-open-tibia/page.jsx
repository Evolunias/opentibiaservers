import PopularZezeniaOnlineOpenTibiaKeywordPage, { generateMetadata } from './popular-zezenia-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineOpenTibiaKeywordPage />;
}
