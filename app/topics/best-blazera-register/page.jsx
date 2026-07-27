import BestBlazeraRegisterKeywordPage, { generateMetadata } from './best-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraRegisterKeywordPage />;
}
