import OfficialEvoleraRegisterKeywordPage, { generateMetadata } from './official-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraRegisterKeywordPage />;
}
