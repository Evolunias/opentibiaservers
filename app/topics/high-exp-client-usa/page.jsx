import HighExpClientUsaKeywordPage, { generateMetadata } from './high-exp-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientUsaKeywordPage />;
}
