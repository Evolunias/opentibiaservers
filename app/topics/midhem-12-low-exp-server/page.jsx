import Midhem12LowExpServerKeywordPage, { generateMetadata } from './midhem-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12LowExpServerKeywordPage />;
}
