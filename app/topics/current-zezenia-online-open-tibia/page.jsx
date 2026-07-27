import CurrentZezeniaOnlineOpenTibiaKeywordPage, { generateMetadata } from './current-zezenia-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineOpenTibiaKeywordPage />;
}
