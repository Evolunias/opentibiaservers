import BestNepreniaOfficialKeywordPage, { generateMetadata } from './best-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaOfficialKeywordPage />;
}
