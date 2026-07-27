import BestTibijkaRegisterKeywordPage, { generateMetadata } from './best-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaRegisterKeywordPage />;
}
