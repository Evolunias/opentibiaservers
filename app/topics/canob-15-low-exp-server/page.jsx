import Canob15LowExpServerKeywordPage, { generateMetadata } from './canob-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15LowExpServerKeywordPage />;
}
