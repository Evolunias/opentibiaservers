import Midhem14LowExpServerKeywordPage, { generateMetadata } from './midhem-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14LowExpServerKeywordPage />;
}
