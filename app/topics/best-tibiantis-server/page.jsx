import BestTibiantisServerKeywordPage, { generateMetadata } from './best-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisServerKeywordPage />;
}
