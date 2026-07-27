import OldSchoolElderaRegisterKeywordPage, { generateMetadata } from './old-school-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaRegisterKeywordPage />;
}
