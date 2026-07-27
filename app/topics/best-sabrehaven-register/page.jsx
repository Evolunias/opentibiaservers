import BestSabrehavenRegisterKeywordPage, { generateMetadata } from './best-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenRegisterKeywordPage />;
}
