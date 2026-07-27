import Oldera13LowExpServerKeywordPage, { generateMetadata } from './oldera-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13LowExpServerKeywordPage />;
}
