import Thaisot15HighExpServerKeywordPage, { generateMetadata } from './thaisot-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15HighExpServerKeywordPage />;
}
