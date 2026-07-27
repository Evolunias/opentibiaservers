import OfficialImperianicRegisterKeywordPage, { generateMetadata } from './official-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicRegisterKeywordPage />;
}
