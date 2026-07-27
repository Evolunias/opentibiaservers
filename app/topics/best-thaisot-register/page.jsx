import BestThaisotRegisterKeywordPage, { generateMetadata } from './best-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotRegisterKeywordPage />;
}
