import NtoStar100LowExpServerKeywordPage, { generateMetadata } from './nto-star-10-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100LowExpServerKeywordPage />;
}
