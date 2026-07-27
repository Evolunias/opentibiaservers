import TopMediviaRegisterKeywordPage, { generateMetadata } from './top-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaRegisterKeywordPage />;
}
