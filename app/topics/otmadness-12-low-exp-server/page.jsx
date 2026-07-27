import Otmadness12LowExpServerKeywordPage, { generateMetadata } from './otmadness-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12LowExpServerKeywordPage />;
}
