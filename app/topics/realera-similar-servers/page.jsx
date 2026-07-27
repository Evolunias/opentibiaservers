import RealeraSimilarServersKeywordPage, { generateMetadata } from './realera-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSimilarServersKeywordPage />;
}
