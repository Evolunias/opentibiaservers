import HighrateCoxaotWebsiteKeywordPage, { generateMetadata } from './highrate-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotWebsiteKeywordPage />;
}
