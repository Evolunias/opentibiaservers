import TibiaoriginsEuropeServersKeywordPage, { generateMetadata } from './tibiaorigins-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsEuropeServersKeywordPage />;
}
