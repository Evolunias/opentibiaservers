import OldSchoolZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './old-school-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineTibiaKeywordPage />;
}
