import Midhem11HighExpServerKeywordPage, { generateMetadata } from './midhem-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11HighExpServerKeywordPage />;
}
