import Oldera96LowExpServerKeywordPage, { generateMetadata } from './oldera-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96LowExpServerKeywordPage />;
}
