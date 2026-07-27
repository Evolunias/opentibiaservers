import OfficialCoxaotRegisterKeywordPage, { generateMetadata } from './official-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotRegisterKeywordPage />;
}
