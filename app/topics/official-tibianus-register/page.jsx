import OfficialTibianusRegisterKeywordPage, { generateMetadata } from './official-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusRegisterKeywordPage />;
}
