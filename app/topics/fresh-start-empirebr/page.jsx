import FreshStartEmpirebrKeywordPage, { generateMetadata } from './fresh-start-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEmpirebrKeywordPage />;
}
