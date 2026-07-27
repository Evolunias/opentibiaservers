import Tibianus13LowExpServerKeywordPage, { generateMetadata } from './tibianus-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13LowExpServerKeywordPage />;
}
