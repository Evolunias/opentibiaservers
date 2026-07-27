import Tibijka14LowExpServerKeywordPage, { generateMetadata } from './tibijka-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14LowExpServerKeywordPage />;
}
