import NtoStar84LowExpServerKeywordPage, { generateMetadata } from './nto-star-8-4-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84LowExpServerKeywordPage />;
}
