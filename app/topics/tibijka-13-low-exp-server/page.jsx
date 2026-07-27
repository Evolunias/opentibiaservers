import Tibijka13LowExpServerKeywordPage, { generateMetadata } from './tibijka-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13LowExpServerKeywordPage />;
}
