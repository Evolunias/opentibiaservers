import Thornia96LowExpServerKeywordPage, { generateMetadata } from './thornia-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96LowExpServerKeywordPage />;
}
