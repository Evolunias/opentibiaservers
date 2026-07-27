import OldSchoolZezeniaOnlineOtsKeywordPage, { generateMetadata } from './old-school-zezenia-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineOtsKeywordPage />;
}
