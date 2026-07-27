import NtoStar12LowExpServerKeywordPage, { generateMetadata } from './nto-star-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12LowExpServerKeywordPage />;
}
