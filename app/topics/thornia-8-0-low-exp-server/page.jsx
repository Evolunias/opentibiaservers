import Thornia80LowExpServerKeywordPage, { generateMetadata } from './thornia-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80LowExpServerKeywordPage />;
}
