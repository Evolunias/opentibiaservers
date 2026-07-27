import PopularEmpirebrOfficialKeywordPage, { generateMetadata } from './popular-empirebr-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrOfficialKeywordPage />;
}
