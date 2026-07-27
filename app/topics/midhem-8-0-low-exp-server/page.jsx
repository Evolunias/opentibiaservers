import Midhem80LowExpServerKeywordPage, { generateMetadata } from './midhem-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80LowExpServerKeywordPage />;
}
