import BestOtmadnessTibiaKeywordPage, { generateMetadata } from './best-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessTibiaKeywordPage />;
}
