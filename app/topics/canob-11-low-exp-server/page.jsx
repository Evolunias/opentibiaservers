import Canob11LowExpServerKeywordPage, { generateMetadata } from './canob-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11LowExpServerKeywordPage />;
}
