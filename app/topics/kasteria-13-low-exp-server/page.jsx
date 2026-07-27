import Kasteria13LowExpServerKeywordPage, { generateMetadata } from './kasteria-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13LowExpServerKeywordPage />;
}
