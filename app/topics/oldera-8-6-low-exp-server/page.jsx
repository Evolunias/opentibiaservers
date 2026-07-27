import Oldera86LowExpServerKeywordPage, { generateMetadata } from './oldera-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86LowExpServerKeywordPage />;
}
