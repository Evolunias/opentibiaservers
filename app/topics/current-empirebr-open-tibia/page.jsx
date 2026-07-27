import CurrentEmpirebrOpenTibiaKeywordPage, { generateMetadata } from './current-empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrOpenTibiaKeywordPage />;
}
