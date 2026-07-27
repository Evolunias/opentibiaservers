import BestArchlightTibiaKeywordPage, { generateMetadata } from './best-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightTibiaKeywordPage />;
}
