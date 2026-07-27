import NewXanteriaGuideKeywordPage, { generateMetadata } from './new-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaGuideKeywordPage />;
}
