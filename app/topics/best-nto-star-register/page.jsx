import BestNtoStarRegisterKeywordPage, { generateMetadata } from './best-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarRegisterKeywordPage />;
}
