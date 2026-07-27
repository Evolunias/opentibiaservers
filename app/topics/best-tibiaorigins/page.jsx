import BestTibiaoriginsKeywordPage, { generateMetadata } from './best-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaoriginsKeywordPage />;
}
