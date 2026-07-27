import Oldera14LowExpServerKeywordPage, { generateMetadata } from './oldera-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14LowExpServerKeywordPage />;
}
