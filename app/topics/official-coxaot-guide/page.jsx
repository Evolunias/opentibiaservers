import OfficialCoxaotGuideKeywordPage, { generateMetadata } from './official-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotGuideKeywordPage />;
}
