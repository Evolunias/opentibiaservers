import OtmadnessSimilarServersKeywordPage, { generateMetadata } from './otmadness-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessSimilarServersKeywordPage />;
}
