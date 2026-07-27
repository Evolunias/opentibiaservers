import NewEmpirebrClientKeywordPage, { generateMetadata } from './new-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEmpirebrClientKeywordPage />;
}
