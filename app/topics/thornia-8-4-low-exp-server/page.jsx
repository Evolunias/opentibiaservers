import Thornia84LowExpServerKeywordPage, { generateMetadata } from './thornia-8-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84LowExpServerKeywordPage />;
}
