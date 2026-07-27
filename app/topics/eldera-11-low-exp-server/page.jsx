import Eldera11LowExpServerKeywordPage, { generateMetadata } from './eldera-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11LowExpServerKeywordPage />;
}
