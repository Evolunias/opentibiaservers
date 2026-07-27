import NewCoxaotWebsiteKeywordPage, { generateMetadata } from './new-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotWebsiteKeywordPage />;
}
