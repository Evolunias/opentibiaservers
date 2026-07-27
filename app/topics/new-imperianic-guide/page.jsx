import NewImperianicGuideKeywordPage, { generateMetadata } from './new-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicGuideKeywordPage />;
}
