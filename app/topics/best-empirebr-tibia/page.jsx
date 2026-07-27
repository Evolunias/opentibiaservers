import BestEmpirebrTibiaKeywordPage, { generateMetadata } from './best-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrTibiaKeywordPage />;
}
