import Thornia15HighExpServerKeywordPage, { generateMetadata } from './thornia-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15HighExpServerKeywordPage />;
}
