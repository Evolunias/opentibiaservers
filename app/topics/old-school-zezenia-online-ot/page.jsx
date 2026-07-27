import OldSchoolZezeniaOnlineOtKeywordPage, { generateMetadata } from './old-school-zezenia-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineOtKeywordPage />;
}
