import PopularCoxaotGuideKeywordPage, { generateMetadata } from './popular-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotGuideKeywordPage />;
}
