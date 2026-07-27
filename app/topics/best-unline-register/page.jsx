import BestUnlineRegisterKeywordPage, { generateMetadata } from './best-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineRegisterKeywordPage />;
}
