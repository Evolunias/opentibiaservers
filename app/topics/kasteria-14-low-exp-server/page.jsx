import Kasteria14LowExpServerKeywordPage, { generateMetadata } from './kasteria-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14LowExpServerKeywordPage />;
}
