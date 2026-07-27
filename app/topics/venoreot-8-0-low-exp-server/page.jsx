import Venoreot80LowExpServerKeywordPage, { generateMetadata } from './venoreot-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot80LowExpServerKeywordPage />;
}
