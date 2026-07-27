import Thornia12HighExpServerKeywordPage, { generateMetadata } from './thornia-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12HighExpServerKeywordPage />;
}
