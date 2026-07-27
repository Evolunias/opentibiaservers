import CustomCoxaotWebsiteKeywordPage, { generateMetadata } from './custom-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotWebsiteKeywordPage />;
}
