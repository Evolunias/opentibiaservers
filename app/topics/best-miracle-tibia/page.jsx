import BestMiracleTibiaKeywordPage, { generateMetadata } from './best-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleTibiaKeywordPage />;
}
