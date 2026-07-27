import Thornia11LowExpServerKeywordPage, { generateMetadata } from './thornia-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11LowExpServerKeywordPage />;
}
