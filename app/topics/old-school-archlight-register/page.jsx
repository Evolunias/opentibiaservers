import OldSchoolArchlightRegisterKeywordPage, { generateMetadata } from './old-school-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightRegisterKeywordPage />;
}
