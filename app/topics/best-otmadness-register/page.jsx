import BestOtmadnessRegisterKeywordPage, { generateMetadata } from './best-otmadness-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessRegisterKeywordPage />;
}
