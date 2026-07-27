import NtoStar14LowExpServerKeywordPage, { generateMetadata } from './nto-star-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14LowExpServerKeywordPage />;
}
