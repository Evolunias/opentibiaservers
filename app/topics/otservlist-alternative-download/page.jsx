import OtservlistAlternativeDownloadKeywordPage, { generateMetadata } from './otservlist-alternative-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeDownloadKeywordPage />;
}
