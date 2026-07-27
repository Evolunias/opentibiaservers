import Venoreot12LowExpServerKeywordPage, { generateMetadata } from './venoreot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12LowExpServerKeywordPage />;
}
