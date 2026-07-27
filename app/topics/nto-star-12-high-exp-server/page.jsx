import NtoStar12HighExpServerKeywordPage, { generateMetadata } from './nto-star-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12HighExpServerKeywordPage />;
}
