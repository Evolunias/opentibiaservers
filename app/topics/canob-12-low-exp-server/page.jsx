import Canob12LowExpServerKeywordPage, { generateMetadata } from './canob-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12LowExpServerKeywordPage />;
}
