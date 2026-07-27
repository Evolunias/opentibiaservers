import CustomYurotsWebsiteKeywordPage, { generateMetadata } from './custom-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsWebsiteKeywordPage />;
}
