import ActiveXanteriaWebsiteKeywordPage, { generateMetadata } from './active-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaWebsiteKeywordPage />;
}
