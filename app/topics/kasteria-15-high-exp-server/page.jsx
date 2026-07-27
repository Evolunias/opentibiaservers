import Kasteria15HighExpServerKeywordPage, { generateMetadata } from './kasteria-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15HighExpServerKeywordPage />;
}
