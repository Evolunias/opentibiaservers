import HighExpRealeraServerKeywordPage, { generateMetadata } from './high-exp-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRealeraServerKeywordPage />;
}
