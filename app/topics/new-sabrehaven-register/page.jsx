import NewSabrehavenRegisterKeywordPage, { generateMetadata } from './new-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenRegisterKeywordPage />;
}
