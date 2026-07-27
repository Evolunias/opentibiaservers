import LowrateCoxaotWebsiteKeywordPage, { generateMetadata } from './lowrate-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotWebsiteKeywordPage />;
}
