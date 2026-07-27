import Venoreot96LowExpServerKeywordPage, { generateMetadata } from './venoreot-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot96LowExpServerKeywordPage />;
}
