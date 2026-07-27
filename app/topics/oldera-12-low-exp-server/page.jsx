import Oldera12LowExpServerKeywordPage, { generateMetadata } from './oldera-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12LowExpServerKeywordPage />;
}
