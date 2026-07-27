import EmpirebrPage, { generateMetadata } from './empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrPage />;
}
