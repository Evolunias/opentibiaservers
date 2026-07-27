import Ameria13LowExpServerKeywordPage, { generateMetadata } from './ameria-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13LowExpServerKeywordPage />;
}
