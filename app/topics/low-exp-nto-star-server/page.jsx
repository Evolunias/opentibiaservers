import LowExpNtoStarServerKeywordPage, { generateMetadata } from './low-exp-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpNtoStarServerKeywordPage />;
}
