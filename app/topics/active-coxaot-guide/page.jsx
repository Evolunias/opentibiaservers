import ActiveCoxaotGuideKeywordPage, { generateMetadata } from './active-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotGuideKeywordPage />;
}
