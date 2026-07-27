import NoResetAmeriaWebsiteKeywordPage, { generateMetadata } from './no-reset-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAmeriaWebsiteKeywordPage />;
}
