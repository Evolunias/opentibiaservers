import FreshStartEmpirebrServerKeywordPage, { generateMetadata } from './fresh-start-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEmpirebrServerKeywordPage />;
}
