import MeneraKeywordPage, { generateMetadata } from './menera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraKeywordPage />;
}
