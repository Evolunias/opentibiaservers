import OldSchoolNtoStarRegisterKeywordPage, { generateMetadata } from './old-school-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarRegisterKeywordPage />;
}
