import BestTibiantisKeywordPage, { generateMetadata } from './best-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisKeywordPage />;
}
