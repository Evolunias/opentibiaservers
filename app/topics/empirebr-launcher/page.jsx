import EmpirebrLauncherKeywordPage, { generateMetadata } from './empirebr-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrLauncherKeywordPage />;
}
