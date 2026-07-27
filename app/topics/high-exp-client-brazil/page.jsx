import HighExpClientBrazilKeywordPage, { generateMetadata } from './high-exp-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientBrazilKeywordPage />;
}
