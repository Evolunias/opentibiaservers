import BestAmeriaRegisterKeywordPage, { generateMetadata } from './best-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaRegisterKeywordPage />;
}
