import Midhem15HighExpServerKeywordPage, { generateMetadata } from './midhem-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15HighExpServerKeywordPage />;
}
