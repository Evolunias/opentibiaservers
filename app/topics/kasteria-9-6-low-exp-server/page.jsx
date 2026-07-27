import Kasteria96LowExpServerKeywordPage, { generateMetadata } from './kasteria-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96LowExpServerKeywordPage />;
}
