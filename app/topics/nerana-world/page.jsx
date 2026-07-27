import NeranaWorldKeywordPage, { generateMetadata } from './nerana-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaWorldKeywordPage />;
}
