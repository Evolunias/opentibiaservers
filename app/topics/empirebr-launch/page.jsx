import EmpirebrLaunchKeywordPage, { generateMetadata } from './empirebr-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrLaunchKeywordPage />;
}
