import Canob13LowExpServerKeywordPage, { generateMetadata } from './canob-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13LowExpServerKeywordPage />;
}
