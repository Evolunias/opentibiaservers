import BestTibiantisLoginKeywordPage, { generateMetadata } from './best-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisLoginKeywordPage />;
}
