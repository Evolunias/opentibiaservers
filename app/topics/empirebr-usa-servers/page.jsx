import EmpirebrUsaServersKeywordPage, { generateMetadata } from './empirebr-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrUsaServersKeywordPage />;
}
