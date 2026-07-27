import BestNepreniaOpenTibiaKeywordPage, { generateMetadata } from './best-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaOpenTibiaKeywordPage />;
}
