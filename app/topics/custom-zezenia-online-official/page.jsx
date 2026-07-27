import CustomZezeniaOnlineOfficialKeywordPage, { generateMetadata } from './custom-zezenia-online-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineOfficialKeywordPage />;
}
