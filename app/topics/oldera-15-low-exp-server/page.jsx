import Oldera15LowExpServerKeywordPage, { generateMetadata } from './oldera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15LowExpServerKeywordPage />;
}
