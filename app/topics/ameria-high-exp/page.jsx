import AmeriaHighExpKeywordPage, { generateMetadata } from './ameria-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaHighExpKeywordPage />;
}
