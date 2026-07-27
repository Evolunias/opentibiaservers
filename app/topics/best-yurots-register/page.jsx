import BestYurotsRegisterKeywordPage, { generateMetadata } from './best-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsRegisterKeywordPage />;
}
