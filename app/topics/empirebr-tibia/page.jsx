import EmpirebrTibiaKeywordPage, { generateMetadata } from './empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrTibiaKeywordPage />;
}
