import Venoreot15LowExpServerKeywordPage, { generateMetadata } from './venoreot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15LowExpServerKeywordPage />;
}
