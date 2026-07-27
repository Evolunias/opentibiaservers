import Kasteria86LowExpServerKeywordPage, { generateMetadata } from './kasteria-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86LowExpServerKeywordPage />;
}
