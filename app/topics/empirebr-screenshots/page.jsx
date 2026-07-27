import EmpirebrScreenshotsKeywordPage, { generateMetadata } from './empirebr-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrScreenshotsKeywordPage />;
}
