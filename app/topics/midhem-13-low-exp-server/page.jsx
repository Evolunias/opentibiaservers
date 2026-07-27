import Midhem13LowExpServerKeywordPage, { generateMetadata } from './midhem-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13LowExpServerKeywordPage />;
}
