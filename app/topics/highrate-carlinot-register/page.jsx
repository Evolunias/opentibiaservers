import HighrateCarlinotRegisterKeywordPage, { generateMetadata } from './highrate-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotRegisterKeywordPage />;
}
