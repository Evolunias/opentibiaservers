import Thornia74LowExpServerKeywordPage, { generateMetadata } from './thornia-7-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74LowExpServerKeywordPage />;
}
