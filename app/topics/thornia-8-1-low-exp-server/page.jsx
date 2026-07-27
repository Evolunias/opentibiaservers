import Thornia81LowExpServerKeywordPage, { generateMetadata } from './thornia-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81LowExpServerKeywordPage />;
}
