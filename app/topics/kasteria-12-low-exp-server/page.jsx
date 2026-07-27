import Kasteria12LowExpServerKeywordPage, { generateMetadata } from './kasteria-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12LowExpServerKeywordPage />;
}
