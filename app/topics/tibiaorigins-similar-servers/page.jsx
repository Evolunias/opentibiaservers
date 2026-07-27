import TibiaoriginsSimilarServersKeywordPage, { generateMetadata } from './tibiaorigins-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsSimilarServersKeywordPage />;
}
