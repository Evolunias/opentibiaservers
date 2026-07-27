import Venoreot11LowExpServerKeywordPage, { generateMetadata } from './venoreot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11LowExpServerKeywordPage />;
}
