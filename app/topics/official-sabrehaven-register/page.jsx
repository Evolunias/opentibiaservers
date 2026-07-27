import OfficialSabrehavenRegisterKeywordPage, { generateMetadata } from './official-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenRegisterKeywordPage />;
}
