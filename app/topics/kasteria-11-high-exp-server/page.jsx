import Kasteria11HighExpServerKeywordPage, { generateMetadata } from './kasteria-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11HighExpServerKeywordPage />;
}
