import BestOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './best-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessOpenTibiaKeywordPage />;
}
