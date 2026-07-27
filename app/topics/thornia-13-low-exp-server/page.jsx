import Thornia13LowExpServerKeywordPage, { generateMetadata } from './thornia-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13LowExpServerKeywordPage />;
}
