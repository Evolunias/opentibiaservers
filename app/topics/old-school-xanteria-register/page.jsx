import OldSchoolXanteriaRegisterKeywordPage, { generateMetadata } from './old-school-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaRegisterKeywordPage />;
}
