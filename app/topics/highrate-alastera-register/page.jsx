import HighrateAlasteraRegisterKeywordPage, { generateMetadata } from './highrate-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraRegisterKeywordPage />;
}
