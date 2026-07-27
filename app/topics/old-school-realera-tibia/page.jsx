import OldSchoolRealeraTibiaKeywordPage, { generateMetadata } from './old-school-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraTibiaKeywordPage />;
}
