import HighrateImperianicRegisterKeywordPage, { generateMetadata } from './highrate-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicRegisterKeywordPage />;
}
