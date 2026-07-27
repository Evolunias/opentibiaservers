import PopularEmpirebrOpenTibiaKeywordPage, { generateMetadata } from './popular-empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrOpenTibiaKeywordPage />;
}
