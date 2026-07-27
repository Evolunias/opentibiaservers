import NtoStar15LowExpServerKeywordPage, { generateMetadata } from './nto-star-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15LowExpServerKeywordPage />;
}
