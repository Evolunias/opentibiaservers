import OfficialNoxiousotRegisterKeywordPage, { generateMetadata } from './official-noxiousot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotRegisterKeywordPage />;
}
