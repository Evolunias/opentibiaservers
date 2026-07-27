import Eldera15LowExpServerKeywordPage, { generateMetadata } from './eldera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15LowExpServerKeywordPage />;
}
