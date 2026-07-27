import Kasteria15LowExpServerKeywordPage, { generateMetadata } from './kasteria-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15LowExpServerKeywordPage />;
}
