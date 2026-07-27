import Venoreot11HighExpServerKeywordPage, { generateMetadata } from './venoreot-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11HighExpServerKeywordPage />;
}
