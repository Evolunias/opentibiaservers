import NtoStar15HighExpServerKeywordPage, { generateMetadata } from './nto-star-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15HighExpServerKeywordPage />;
}
