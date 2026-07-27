import OfficialSaintsotRegisterKeywordPage, { generateMetadata } from './official-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotRegisterKeywordPage />;
}
