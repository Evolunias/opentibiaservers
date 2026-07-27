import LowExpClientUsaKeywordPage, { generateMetadata } from './low-exp-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientUsaKeywordPage />;
}
