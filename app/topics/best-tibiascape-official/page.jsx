import BestTibiascapeOfficialKeywordPage, { generateMetadata } from './best-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeOfficialKeywordPage />;
}
