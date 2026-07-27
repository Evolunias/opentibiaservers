import CustomDemolidoresWebsiteKeywordPage, { generateMetadata } from './custom-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresWebsiteKeywordPage />;
}
