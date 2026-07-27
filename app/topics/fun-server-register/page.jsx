import FunServerRegisterKeywordPage, { generateMetadata } from './fun-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerRegisterKeywordPage />;
}
