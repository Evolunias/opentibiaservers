import BestTibiantisRegisterKeywordPage, { generateMetadata } from './best-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisRegisterKeywordPage />;
}
