import Kasteria80LowExpServerKeywordPage, { generateMetadata } from './kasteria-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80LowExpServerKeywordPage />;
}
