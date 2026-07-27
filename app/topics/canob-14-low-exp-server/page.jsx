import Canob14LowExpServerKeywordPage, { generateMetadata } from './canob-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14LowExpServerKeywordPage />;
}
