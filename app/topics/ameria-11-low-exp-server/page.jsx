import Ameria11LowExpServerKeywordPage, { generateMetadata } from './ameria-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11LowExpServerKeywordPage />;
}
