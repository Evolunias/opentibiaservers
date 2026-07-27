import Venoreot14LowExpServerKeywordPage, { generateMetadata } from './venoreot-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14LowExpServerKeywordPage />;
}
