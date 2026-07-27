import Thornia15LowExpServerKeywordPage, { generateMetadata } from './thornia-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15LowExpServerKeywordPage />;
}
