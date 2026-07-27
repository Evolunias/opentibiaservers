import LumineraSimilarServersKeywordPage, { generateMetadata } from './luminera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraSimilarServersKeywordPage />;
}
