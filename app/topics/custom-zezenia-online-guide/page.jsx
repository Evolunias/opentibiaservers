import CustomZezeniaOnlineGuideKeywordPage, { generateMetadata } from './custom-zezenia-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineGuideKeywordPage />;
}
