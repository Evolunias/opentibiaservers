import CustomXanteriaWebsiteKeywordPage, { generateMetadata } from './custom-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaWebsiteKeywordPage />;
}
