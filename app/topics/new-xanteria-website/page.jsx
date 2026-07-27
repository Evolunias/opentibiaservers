import NewXanteriaWebsiteKeywordPage, { generateMetadata } from './new-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaWebsiteKeywordPage />;
}
