import ActiveEmpirebrOpenTibiaKeywordPage, { generateMetadata } from './active-empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrOpenTibiaKeywordPage />;
}
