import OldSchoolZezeniaOnlineOtServerKeywordPage, { generateMetadata } from './old-school-zezenia-online-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineOtServerKeywordPage />;
}
