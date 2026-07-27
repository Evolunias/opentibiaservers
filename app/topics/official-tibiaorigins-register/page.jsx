import OfficialTibiaoriginsRegisterKeywordPage, { generateMetadata } from './official-tibiaorigins-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsRegisterKeywordPage />;
}
