import Ameria15LowExpServerKeywordPage, { generateMetadata } from './ameria-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15LowExpServerKeywordPage />;
}
