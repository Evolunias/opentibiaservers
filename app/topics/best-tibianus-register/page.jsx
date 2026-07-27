import BestTibianusRegisterKeywordPage, { generateMetadata } from './best-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusRegisterKeywordPage />;
}
