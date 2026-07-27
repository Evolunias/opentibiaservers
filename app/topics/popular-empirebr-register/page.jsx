import PopularEmpirebrRegisterKeywordPage, { generateMetadata } from './popular-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrRegisterKeywordPage />;
}
