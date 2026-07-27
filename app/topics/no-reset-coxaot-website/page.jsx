import NoResetCoxaotWebsiteKeywordPage, { generateMetadata } from './no-reset-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotWebsiteKeywordPage />;
}
