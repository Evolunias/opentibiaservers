import TopSabrehavenRegisterKeywordPage, { generateMetadata } from './top-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenRegisterKeywordPage />;
}
