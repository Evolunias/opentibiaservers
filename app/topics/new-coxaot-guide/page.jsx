import NewCoxaotGuideKeywordPage, { generateMetadata } from './new-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotGuideKeywordPage />;
}
