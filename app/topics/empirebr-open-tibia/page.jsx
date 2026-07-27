import EmpirebrOpenTibiaKeywordPage, { generateMetadata } from './empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrOpenTibiaKeywordPage />;
}
