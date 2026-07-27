import BestTibiaoriginsClientKeywordPage, { generateMetadata } from './best-tibiaorigins-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaoriginsClientKeywordPage />;
}
