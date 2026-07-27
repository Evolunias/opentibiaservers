import PopularEmpirebrGuideKeywordPage, { generateMetadata } from './popular-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrGuideKeywordPage />;
}
