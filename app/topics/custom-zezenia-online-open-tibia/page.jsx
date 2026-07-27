import CustomZezeniaOnlineOpenTibiaKeywordPage, { generateMetadata } from './custom-zezenia-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineOpenTibiaKeywordPage />;
}
