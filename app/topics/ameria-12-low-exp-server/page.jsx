import Ameria12LowExpServerKeywordPage, { generateMetadata } from './ameria-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12LowExpServerKeywordPage />;
}
