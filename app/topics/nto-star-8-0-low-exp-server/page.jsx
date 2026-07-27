import NtoStar80LowExpServerKeywordPage, { generateMetadata } from './nto-star-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80LowExpServerKeywordPage />;
}
