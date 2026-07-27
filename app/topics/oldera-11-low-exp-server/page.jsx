import Oldera11LowExpServerKeywordPage, { generateMetadata } from './oldera-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11LowExpServerKeywordPage />;
}
