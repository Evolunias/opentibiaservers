import OfficialTibiantisRegisterKeywordPage, { generateMetadata } from './official-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisRegisterKeywordPage />;
}
