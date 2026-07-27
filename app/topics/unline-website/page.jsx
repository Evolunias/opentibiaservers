import UnlineWebsiteKeywordPage, { generateMetadata } from './unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineWebsiteKeywordPage />;
}
