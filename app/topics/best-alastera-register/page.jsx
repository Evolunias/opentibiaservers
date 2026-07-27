import BestAlasteraRegisterKeywordPage, { generateMetadata } from './best-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraRegisterKeywordPage />;
}
