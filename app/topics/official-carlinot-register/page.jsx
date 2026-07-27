import OfficialCarlinotRegisterKeywordPage, { generateMetadata } from './official-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotRegisterKeywordPage />;
}
