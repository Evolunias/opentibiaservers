import NtoStar13LowExpServerKeywordPage, { generateMetadata } from './nto-star-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13LowExpServerKeywordPage />;
}
