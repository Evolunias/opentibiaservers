import HighrateMediviaRegisterKeywordPage, { generateMetadata } from './highrate-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaRegisterKeywordPage />;
}
