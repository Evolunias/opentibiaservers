import Tibijka15LowExpServerKeywordPage, { generateMetadata } from './tibijka-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15LowExpServerKeywordPage />;
}
