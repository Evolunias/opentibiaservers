import CurrentAlasteraRegisterKeywordPage, { generateMetadata } from './current-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraRegisterKeywordPage />;
}
