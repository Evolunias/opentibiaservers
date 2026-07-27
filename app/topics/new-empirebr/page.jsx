import NewEmpirebrKeywordPage, { generateMetadata } from './new-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrKeywordPage />;
}
