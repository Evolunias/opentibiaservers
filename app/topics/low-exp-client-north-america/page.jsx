import LowExpClientNorthAmericaKeywordPage, { generateMetadata } from './low-exp-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientNorthAmericaKeywordPage />;
}
