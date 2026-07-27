import Tibijka11LowExpServerKeywordPage, { generateMetadata } from './tibijka-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11LowExpServerKeywordPage />;
}
