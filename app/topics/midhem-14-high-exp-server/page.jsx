import Midhem14HighExpServerKeywordPage, { generateMetadata } from './midhem-14-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14HighExpServerKeywordPage />;
}
