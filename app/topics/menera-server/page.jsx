import MeneraServerKeywordPage, { generateMetadata } from './menera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraServerKeywordPage />;
}
