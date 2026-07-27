import Thornia14LowExpServerKeywordPage, { generateMetadata } from './thornia-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14LowExpServerKeywordPage />;
}
