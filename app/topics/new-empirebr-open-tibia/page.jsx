import NewEmpirebrOpenTibiaKeywordPage, { generateMetadata } from './new-empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrOpenTibiaKeywordPage />;
}
