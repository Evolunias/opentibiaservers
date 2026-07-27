import BestRealestaRegisterKeywordPage, { generateMetadata } from './best-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaRegisterKeywordPage />;
}
