import PopularEmpirebrKeywordPage, { generateMetadata } from './popular-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrKeywordPage />;
}
