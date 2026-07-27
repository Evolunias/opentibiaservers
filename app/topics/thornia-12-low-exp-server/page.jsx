import Thornia12LowExpServerKeywordPage, { generateMetadata } from './thornia-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12LowExpServerKeywordPage />;
}
