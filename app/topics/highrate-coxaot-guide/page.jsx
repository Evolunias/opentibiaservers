import HighrateCoxaotGuideKeywordPage, { generateMetadata } from './highrate-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotGuideKeywordPage />;
}
