import PopularEmpirebrClientKeywordPage, { generateMetadata } from './popular-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrClientKeywordPage />;
}
