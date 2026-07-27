import Venoreot13LowExpServerKeywordPage, { generateMetadata } from './venoreot-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13LowExpServerKeywordPage />;
}
