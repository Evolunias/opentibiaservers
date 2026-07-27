import Thornia71LowExpServerKeywordPage, { generateMetadata } from './thornia-7-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71LowExpServerKeywordPage />;
}
