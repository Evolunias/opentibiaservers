import Thornia11HighExpServerKeywordPage, { generateMetadata } from './thornia-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11HighExpServerKeywordPage />;
}
