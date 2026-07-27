import Eldera12LowExpServerKeywordPage, { generateMetadata } from './eldera-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12LowExpServerKeywordPage />;
}
